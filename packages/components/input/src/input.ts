import { ExtractPropTypes, PropType } from 'vue';

export type InputPrefixesType = 'icon' | 'select' | 'text';
export type InputSuffixType = 'icon' | 'select' | 'text';

export const inputProps = {
    // 绑定值
    modelValue: {
        // 父组件 v-model 没有指定参数名，则默认是 modelValue
        type: String,
        default: '',
    },
    // 类型
    type: {
        type: String,
        default: 'text',
    },
    size: {
        type: String,
        default: 'medium',
    },
    focusSelect: {
        type: Boolean,
        default: false,
    },
    align: {
        type: String,
        default: 'left',
    },
    // 禁用
    disabled: {
        type: Boolean,
        default: false,
    },
    // 是否使用清空按钮
    clearable: {
        type: Boolean,
        default: () => false,
    },
    // 默认提示语
    placeholder: {
        type: String,
        default: '请输入',
    },
    // 是否只读
    readonly: {
        type: Boolean,
        default: false,
    },
    // 对齐方式
    showPassword: {
        type: Boolean,
        default: false,
    },
    // 缩放模式
    resize: {
        type: String,
        default: 'none',
    },
    autoWidth: {
        type: Boolean,
        default: false,
    },
    maxLength: {
        type: Number,
        default: null,
    },
    showCount: {
        type: Boolean,
        default: false,
    },
    renderCount: {
        type: Function,
        default: (value: string) => {
            return value?.length || 0;
        },
    },
    prefixes: {
        type: String as PropType<InputPrefixesType>,
        default: '',
    },
    prefixesBody: {
        type: [String, Array],
        default: 'Prefixes',
    },
    suffix: {
        type: String as PropType<InputSuffixType>,
        default: '',
    },
    suffixBody: {
        type: [String, Array],
        default: 'Suffix',
    },
    prefixesTooltip: {
        type: String,
        default: '',
    },
    suffixTooltip: {
        type: String,
        default: '',
    },
};
export type DateRangePickerProps = ExtractPropTypes<typeof inputProps>;
