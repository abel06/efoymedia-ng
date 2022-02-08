export class User {
    constructor(
        public email: string | null,
        public username: string | null,
        private accessToken: string | null,
        private refreshToken: string | null,
    ) { }

    get token() {
        return this.accessToken;
    }
    get refresh() {
        return this.refreshToken;
    }

}
