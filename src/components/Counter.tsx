import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";

export const Count = observer(() => {
    const {rootStore: {countStore}} = useStore();

    const onInc = () => {
        countStore.inc();
    }
    const onDec = () => {
        countStore.dec();
    }
    return (
        <div>
            Count: {countStore.getCountValue}
            <div>
                <button onClick={onInc}>+1</button>
                <button onClick={onDec}>-1</button>
            </div>
        </div>
    )
})