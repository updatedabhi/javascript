const abc = {
  myname: "Abhishek",
  role: "Javascript dev",
  display: function () {
    setTimeout(() => {
      console.log(this.myname, this.role);
    }, 1000);
  },
  chck: function () {
    console.log(this);
  },
};

abc.chck();
