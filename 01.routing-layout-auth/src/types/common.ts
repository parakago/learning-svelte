class LoginStatus {
	readonly uid: string;

    private static readonly UID_ANON = 'anonymous';

    static readonly ANON = new LoginStatus(LoginStatus.UID_ANON);

    /** method description */
	constructor(uid: string) {
		this.uid = uid;
	}

    isLogin(): boolean {
        return this.uid != LoginStatus.UID_ANON;
    }

    hasRole(role: string) : boolean {
        return true;
    }
}

export { LoginStatus }