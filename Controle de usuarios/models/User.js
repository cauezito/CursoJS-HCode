class User{
    constructor(name, gender, birth, country, email, password, photo, type){
        this._id;
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._type = type;
        this._register = new Date();
    }
    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }

    get birth(){
        return this._birth;
    }
    set birth(birth){
        this._birth = birth;
    }

    get country(){
        return this._country;
    }
    set country(country){
        this._country = country;
    }

    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }

    get password(){
        return this._password;
    }
    set password(pass){
        this._password = pass;
    }

    get photo(){
        return this._photo;
    }
    set photo(photo){
        this._photo = photo;
    }

    get type(){
        return this._type;
    }
    set type(type){
        this._type = type;
    }

    get register(){
        return this._register;
    }
    set register(register){
        this._register = register;
    }

    loadFromJSON(json){
        for(let name in json){
            switch(name){
                case '_register':
                    this[name] = new Date(json[name]);
                break;
                default:
                    this[name] = json[name];
            }
           
        }
    }

    getNewId(){
        let usersId = parseInt(localStorage.getItem("usersId"));
        if(!usersId > 0) usersId = 0;
        usersId++;
        localStorage.setItem("usersId", usersId);
        return usersId;
    }

    save(){
        let users = User.getUsers();
        if(this.id > 0){
            users.map(u=>{
                if(u._id == this.id){
                   Object.assign(u,this);
                }
                return u;
            });
           
        } else {
            this._id = this.getNewId();
            users.push(this);
        }    
        //sobrescreve e converte para string
        localStorage.setItem("users", JSON.stringify(users));    
    }

    static getUsers(){
        let users = [];
        //Se já houver conteúdo gravado, recupera e transforma em array
        if(localStorage.getItem("users")){
            users = JSON.parse(localStorage.getItem("users"));
        }

        return users;
    }

    remove(){
        let users = User.getUsers();
        users.forEach((element, index) => {
           if(this._id == element._id){
               users.splice(index, 1);
           } 
        });
        localStorage.setItem("users", JSON.stringify(users));  
    }
}