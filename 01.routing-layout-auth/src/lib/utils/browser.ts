/**
 * Browser
 */
export class Browser {
	/** Creates a cookie */
	static setCookie(name: string, value: string): void {
        const argc = arguments.length,
            expires: Date = (argc > 2) ? arguments[2] : null,
            path: string = (argc > 3) ? arguments[3] : '/',
            domain: string = (argc > 4) ? arguments[4] : null,
            secure: boolean = (argc > 5) ? arguments[5] : false;
		
		document.cookie = name + "=" +
			encodeURIComponent(value) +
			((expires === null) ? "" : ("; expires=" + expires.toUTCString())) +
			((path === null) ? "/" : ("; path=" + path)) +
			((domain === null) ? "" : ("; domain=" + domain)) +
			((secure === true) ? "; secure" : "");
	}

	/** Retrieves cookies */
	static getCookie(name: string): string | null {
		let value: string | null = null;
		document.cookie.split(';').forEach((part) => {
			const s : string[] = part.split('=');
			if (s[0].trim() == name) {
				value = decodeURIComponent(s[1].trim());
			}
		});
		
		return value;
	}

	/** Replaces the current resource with the provided path */
	static redirect(path: string): void {
		document.location.replace(path);
	}

	/** Reloads the current URL */
	static refresh(): void {
		document.location.reload();
	}

	/** move back one page in the session history */
	static goBack(): void {
		window.history.back();
	}
}