import AjaxErrorDialog from './src/AjaxErrorDialog';

AjaxErrorDialog.install = (Vue) => {
    Vue.component(AjaxErrorDialog.name, AjaxErrorDialog);
}

export default AjaxErrorDialog;
