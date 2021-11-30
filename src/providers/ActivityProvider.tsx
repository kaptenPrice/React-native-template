import React, {
	createContext,
	useContext,
	useState,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useEffect,
} from 'react';
import { useFetch } from '../helper/useFetch';
import { UseProfileType } from '../types/types';

export const ActData = createContext(null);

const ActivityProvider = ({ children }: PropsWithChildren<any>) => {
	const [act, setAct] = useState();

	// useEffect(() => {
	// 	const fetchData = () => {
	// 		const response = useFetch('/profile');
    //         //@ts-ignore
	// 		setAct(response.act);
	// 	};
	// }, []);
    


	return <ActData.Provider value={{ act, setAct}}>{children}</ActData.Provider>;
};
export default ActivityProvider;

export const useActivity = (): UseProfileType => useContext(ActData);


