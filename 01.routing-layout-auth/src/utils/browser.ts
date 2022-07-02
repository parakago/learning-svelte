export class Browser {
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

	static redirect(path: string): void {
		document.location.replace(path);
	}

	static refresh(): void {
		document.location.reload();
	}
}