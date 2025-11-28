import { usePostChatMessage } from "../hooks"
import { useForm, type SubmitHandler } from 'react-hook-form'

type FormFields = {
  input: string;
}

export const Chatform = () => {
  const { mutateAsync } = usePostChatMessage();
  const { register, handleSubmit, reset, formState: { isSubmitting }} = useForm<FormFields>()
  const onSubmit: SubmitHandler<FormFields> = async (formData) =>{
    try {
      const input = formData.input;
      await mutateAsync({input})
      reset();
    } catch (err) {
      console.log(`Error submitting the chat message form: ${err}`)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-neutral-50 h-20 rounded-2xl px-3">
        <input 
        disabled={isSubmitting} 
        {...register('input')} 
        className="w-full h-full text-2xl text-white outline-0 disabled:opacity-50"
        type="text" 
        placeholder='Type your question about Samuel...'
        />
    </form>
  )
}
