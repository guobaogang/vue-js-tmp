import { setToken } from "@/utils/token";
import { mapMutations } from "vuex";
import ajax from '@/serve/api/ajax';

export default {
    data() {
        let validateUserName = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            }
            callback();
        };
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('请输入密码'));
            }
            callback();
        };
        return {
            ruleForm: {
                userName: '',
                pass: ''
            },
            rules: {
                userName: [
                    { validator: validateUserName, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        ...mapMutations(['setName']),
        login() {
            ajax({
                url: '/api/login',
                method: 'POST',
                data: {
                    userName: this.ruleForm.userName,
                    password: this.ruleForm.pass
                }
            })
                .then(res => {
                    if (res.success) {
                        setToken(res.data.token);
                        this.$router.replace({ path: '/home' });
                        this.setName(this.ruleForm.userName);
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.login();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}