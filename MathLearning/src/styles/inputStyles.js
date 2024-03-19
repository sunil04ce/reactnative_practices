import tw from 'twrnc';
import fontFamilyStyles from '../styles/fontFamilyStyles';
import {AppColors} from '../styles/appColors';

const InputStyles = {
  loginInputStyle: [
    tw`rounded-md border-[${AppColors.box_purple_C2D3F5}] px-4 py-2 border mb-3.5 bg-white text-[${AppColors.textColor_333333}] text-[13px] h-12.5`,
    fontFamilyStyles.rh_medium_500,
  ],
  formInputStyle: [
    tw`rounded border-[${AppColors.box_purple_C2D3F5}] px-4 py-2 border mb-2.5 bg-white text-[${AppColors.textColor_333333}] text-[13px] h-11`,
    fontFamilyStyles.rh_medium_500,
  ],
};

export default InputStyles;
