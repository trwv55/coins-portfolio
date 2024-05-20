import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";

// это кастомные хуки, которые обеспечивают типизацию для хуков useDispatch и useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();  
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 