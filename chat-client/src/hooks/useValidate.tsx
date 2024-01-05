import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

type userType = {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

const Schema : ZodType<userType> = z.object({
    firstname: z.string().min(3).max(9),
    lastname: z.string().min(3).max(9),
    email: z.string(),
    password: z.string().min(3).max(14)
}).refine((data) => (data.password.length <= 5), {
        message: 'weak password'
    }
)

const { register, handleSubmit, formState: {errors} } = useForm<userType>({resolver: zodResolver(Schema)})
export const ers = errors;
export const submit = (data: userType) => {
    console.log(data)
}

export {
    register,
    handleSubmit
}
