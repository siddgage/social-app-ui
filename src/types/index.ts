export class UserDetails {
    username: string
    name: string
    email: string
    password: string

    constructor(username: string, name: string, email: string, password: string) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getUserDetails(): string {
        return `Username: ${this.username}, Name: ${this.name}, Email: ${this.email}`;
    }
}

export interface ErrorModel {
    message: string,
    timestamp: Date
}