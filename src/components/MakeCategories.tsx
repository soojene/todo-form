import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { cateTest, selectOption } from '../atoms';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: darkgray; */
`;

const CateInput = styled.input`
    min-width: 200px;
    padding: 5px 5px;
    font-size: 1.1rem;
    outline: none;
    border: none;
    color: ${(props)=>props.theme.textColor};
    border-bottom: white solid 1px;
    background-color: transparent;
    margin-bottom: 20px;
`;

const UlBox = styled.ul`
    display: flex;
    border-bottom: white dotted 2px;
    margin-bottom: 30px;
`;

const CateBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    border: none;
    border-radius: 20px;
    padding: 3px 10px;
    margin: 6px 5px;
    cursor: pointer;
    :hover{
        background-color: ${(props)=>props.theme.accentColor};
    }
`;

const DeleteBtn = styled.div`
    font-size: 12px;
    border: red solid 1px;
    border-radius: 15px;
    padding: 1px 5px 2px 5px;
    margin-left: 15px;
    color: red;
    :hover{
        background-color: red;
        color: white;
    }
`;

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
            // if (catego === undefined){
            //     console.log("nothing",typeof cate[0]?.label);
            //     setCategory(cate[0]?.label);
            // }
            // console.log(catego);
            return;
        }
    }
    return (
        <Box>
            <form onSubmit={handleSubmit(handleForm)} autoComplete='off'>
                <CateInput {...register("cateInput", {required:"create a category"})} placeholder='Create a category here' />
            </form> 
            {/* <Selection value={category} onInput={onInput}>
                {cate?.map((cates) => (
                <option key={cates.id} value={cates.label}>{cates.label}</option>
                ))}
            </Selection> */}
            <UlBox>
                {cate?.map((cates) => (
                <CateBtn key={cates.id} value={cates.label} onClick={onInput }>
                    {cates.label}
                    <DeleteBtn key={cates.id + `delete`} id={cates.label} onClick={deleteCategory}>x</DeleteBtn>
                </CateBtn>
                ))}
            </UlBox>
        </Box>
    )
}

export default MakeCategories;