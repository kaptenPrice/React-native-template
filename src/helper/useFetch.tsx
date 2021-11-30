import { UseFetchType } from "../types/types";

export const useFetch: UseFetchType = async (endpoint, init) => {
	let status = null;
	try {
		const response = await fetch(`http://URL${endpoint}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			...init,
		});
		status = response.status;

		const data = await response.json();
		return { data, status };
	} catch (error) {
		return { error, status };
	}
};

export type EndPointType =
	| '/user'
	| '/login'
	| '/profile'
	| '/logout'
	| '/...'
	| `/favorite-pass/get-by-id/${string}`
	| `/favorite-pass/delete/${string}`
	| `/pass/search-by-name/${string}`
	| `/pass/search-by-city/${string}`
	| `/user/resetPassword/${string}`;
