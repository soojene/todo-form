import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cateTest, selectOption } from '../atoms';

interface ICateForm {
    cateInput: string;
}

function MakeCategories (){
    const setCategory = useSetRecoilState(selectOption);
    const [cate, setCate] = useRecoilState(cateTest);
    const {register, handleSubmit, setValue} = useForm<ICateForm>();
    // const onInput = (event: React.FormEvent<HTMLSelectElement>) => { setCategory(event.currentTarget.value as any);
    // // console.log(category);
    // };
    const onInput = (event:any) => { 
        setCategory(event.target.value);
        };
    const handleForm = ({cateInput}: ICateForm) =>{ 
        setCate((oldValue) =>[
            { label:cateInput, id: Date.now() }, ...oldValue,]);
            setCategory(cateInput);
            setValue("cateInput", "");
            // console.log(cate);
        }

    const deleteCategory =(event :any)=>{
        if(window.confirm(`are you sure you want to delete "${event.target.id}"?`)){
            setCate((old)=> {
                const deletOne = old.findIndex((one)=>one.label === event.target.id);
                return [
                    ...old.slice(0, deletOne),
                    ...old.slice(deletOne+1)
                ];
            })
        }else{
            return;
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <input {...register("cateInput", {required:"create a category"})} placeholder='create a categoty' />
            </form> 
            {/* <Selection value={category} onInput={onInput}>
                {cate?.map((cates) => (
                <option key={cates.id} value={cates.label}>{cates.label}</option>
                ))}
            </Selection> */}
            <ul>
                {cate?.map((cates) => (
                <button key={cates.id} value={cates.label} onClick={onInput }>
                    {cates.label}
                    <div key={cates.id + `delete`} id={cates.label} onClick={deleteCategory}>❌</div>
                </button>
                ))}
            </ul>
        </div>
    )
}

export default MakeCategories;