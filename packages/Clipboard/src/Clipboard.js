import Clipboard from 'clipboard';

export default {
    name: 'ci-clipboard',
    bind($el, $binding) {
        return new Clipboard($el, {
            text: () => $binding.value.text,
        }).on('success', () => {
            $binding.value.onSuccess();
        });
    },
};
