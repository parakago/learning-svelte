import { Browser } from "$lib/utils/browser";
import { AppRole } from "./appRole";

/**
 * Test
 */
export class LoginStatus {
	readonly uid: string;

	private static readonly COOKIE_KEY_UID = 'loginUid';
	private static readonly UID_ANON = 'anonymous';
	private static readonly ANON = new LoginStatus(LoginStatus.UID_ANON);
	
	private constructor(uid: string) {
		this.uid = uid;
	}
	
	static async get(): Promise<LoginStatus> {
		const uid = Browser.getCookie(LoginStatus.COOKIE_KEY_UID);
		if (uid == null || uid.length == 0) {
			return LoginStatus.ANON;
		} else {
			return new LoginStatus(uid);
		}
	}

	static async set(uid: string): Promise<void> {
		Browser.setCookie(LoginStatus.COOKIE_KEY_UID, uid);
	}

	isLogin(): boolean {
		return this.uid != LoginStatus.UID_ANON;
	}

	hasRole(role: AppRole): boolean {
		if (role == AppRole.Admin)
			return this.uid == 'admin';
		else
			return this.isLogin();
	}
}