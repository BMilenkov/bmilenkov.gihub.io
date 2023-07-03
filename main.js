function message() {
    let Name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let msg = document.getElementById('message');
    let nmb = document.getElementById('number');
    const right = document.getElementById('right');
    const wrong = document.getElementById('wrong');
    const emailError = document.getElementById('emailError');
    const numberError = document.getElementById('numberError');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^(070|071|072|073|074|075|076|077|078|079)\d{6}$/;

    if (Name.value === '' ||
        email.value === '' ||
        !emailRegex.test(email.value) ||
        msg.value === '' ||
        subject.value === '' ||
        nmb.value === '' ||
        !numberRegex.test(nmb.value))
    {
        if(Name.value === '' ||
            email.value === '' ||
            msg.value === '' ||
            subject.value === '' ||
            nmb.value === '')
        {
            wrong.style.display = 'block';
        }
        else if(!emailRegex.test(email.value) && !numberRegex.test(nmb.value)) {
            emailError.style.display = 'block';
            numberError.style.display = 'block';
        }
        else if (!emailRegex.test(email.value)) {
            emailError.style.display = 'block';
        }
        else if (!numberRegex.test(nmb.value)) {
            numberError.style.display = 'block';
        }
    } else {
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
            subject.value = '';
            nmb.value = '';
        }, 2000);
        right.style.display = 'block';
    }
    setTimeout(() => {
        emailError.style.display = 'none';
        numberError.style.display = 'none';
        wrong.style.display = 'none';
        right.style.display = 'none';
    }, 2000);
}
