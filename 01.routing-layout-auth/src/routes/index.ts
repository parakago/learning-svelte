export async function get() {
	return {
		headers: { Location: '/a' },
		status: 302
	}
}