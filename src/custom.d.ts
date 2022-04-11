// 只要 import style from '*.css' 时都会遵循以下约定
declare module "*.css" {
    const css: {
        [key: string]: string
    }
    export default css
}
