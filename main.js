const ageDisplay = document.getElementById("ageDisplay");

const dob = document.getElementById("dob");
dob.max = new Date().toISOString().split("T")[0];

const ageBtn = document.getElementById("ageBtn");
ageBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const Bday = new Date(dob.value);
    console.log(Bday);

    const today = new Date();
    console.log(today);

    let age = new Date(today - Bday);
    console.log(age);

    console.log(age.getFullYear() - 1970);
    console.log(age.getMonth());
    console.log(age.getDate());

    let ans = (`${age.getFullYear() - 1970} years ${age.getMonth()} months ${age.getDate()} days old `);

    console.log(ans);
    // alert(ans);
    ageDisplay.innerHTML = ans;

})


// dob.max = new Date().toISOString().split("T")[0];

// const ageDisplay = document.getElementById("ageDisplay");

// function calAge(dob1) {
//     let dob = new Date(dob1);
//     let today = new Date();

//     let timeDiff = Math.abs(today.getTime() - dob.getTime());
//     let age =  Math.ceil(timeDiff/(1000*60*60*24*365));

//     console.log(age);
//     ageDisplay.innerHTML = age;
// }






