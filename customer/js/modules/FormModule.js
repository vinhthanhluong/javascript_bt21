export default function FormModule() {
    // disable form
    if ($('#disable-form').length) {
        $(".pro-input.disable").prop('disabled', true);

        $(".product-inner.sold-out").click(function (e) {
            e.preventDefault();
        });
    }

    // input eff
    if ($('bx-f').length) {
        let inp = document.querySelectorAll('.bx-f input');

        inp.forEach(el => {
            let wrap = el.parentElement;

            el.addEventListener('focusin', () => {
                wrap.classList.add('active');
            });

            el.addEventListener('focusout', () => {
                el.value ? '' : wrap.classList.remove('active');
            });
        });
    }

    //up load file 
    let file = document.querySelectorAll('.fileJS');
    file.forEach((el) => {
        let inp = el.querySelector('.fileInp');
        let txt = el.querySelector('.fileTxt');

        inp.addEventListener('change', () => {
            let upname = inp.value.split(`\\`);
            let name = upname[upname.length - 1];
            txt.innerHTML = name;
        });
    });

    //up load img
    if ($('.file-img').length) {
        imgInp.onchange = evt => {
            const [file] = imgInp.files
            if (file) {
                imgupload.src = URL.createObjectURL(file)
            }
        }

        // <form runat="server">
        //     <input accept="image/*" type='file' id="imgInp" />
        //     <img id="imgupload" src="#" alt="your image" />
        // </form>
    }




}