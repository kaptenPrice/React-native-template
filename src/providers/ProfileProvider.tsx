import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
} from 'react';
export const UserData = createContext(null);

const ProfileProvider = ({ children }: PropsWithChildren<any>) => {
	const [authenticatedUser, setAuthenticatedUser] = useState(false);
	return (
		<UserData.Provider value={{ authenticatedUser, setAuthenticatedUser }}>
			{children}
		</UserData.Provider>
	);
};
export default ProfileProvider;

export const useProfile = (): UseProfileType => useContext(UserData);

type UseProfileType = {
	authenticatedUser: boolean;
	setAuthenticatedUser: Dispatch<SetStateAction<boolean>>;
};
