import { Alert } from 'react-native';
import Joi from 'joi';



const joinSchema = Joi.object({
    username: Joi.string().pattern(/^[a-z][a-z0-9]*$/).min(5).max(18).required()
        .messages({
            'string.pattern.base': '아이디는 영어(대문자 불가)와 숫자만 가능합니다.',
            'string.min': '아이디는 최소 5자 이상이어야 합니다.',
            'string.max': '아이디는 최대 18자 이하여야 합니다.',
        }),
    nickname: Joi.string().pattern(/^[a-zA-Z0-9가-힣]*$/).min(3).max(10).required()
        .messages({
            'string.pattern.base': '닉네임은 영문, 숫자, 한글만 가능합니다. 특수문자는 사용할 수 없습니다.',
            'string.min': '닉네임은 최소 3자 이상이어야 합니다.',
            'string.max': '닉네임은 최대 10자 이하여야 합니다.',
        }),
    pw1: Joi.string().required(),
    pw2: Joi.string().required()
})



const validateJoin = (data) => {
    const result = joinSchema.validate(data)
    return result
}


export default validateJoin;