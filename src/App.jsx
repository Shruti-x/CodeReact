import React from 'react'

import Card from './components/Card'


const App = () => {


const jobOpenings = [
  {
     brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABs1BMVEX09PTjPis6fOwsokzxtQD7+fU4dus3fe13o+/y9fY3euz39PFZi+r09fPq6/JBg+vx9vL18/biPi7lPSrwtgDw9vXz9Pj38vj88PYuoU3lPDHgPyv48vLy9u/zsgDw9fnx9+0ro0jx2Nfw/P3eKwDkLh3eQC7jOCHkOzPwtrfiQCb48/9ynu7vx1v37edpl+0Tnj6Qx5u42b1yuojL4dHs+uzt5ubv3tLtwbXvppfvjnvpcFrjVkDoJQfrg3jvubHkioHjY1fqp5jy0L/hRzvrb2T0m53cNxPuzcbpWU/leW3aYlThUjvkLh7vqaT43tD14+rgUlTm5dDlqKXkcnDbemXiWUHjlIPuHBX35Nzlta3qUEvpdmry0t3bi0/cl4bufBf1lwDfXRnwzW71iBLw2ZXeTiLzvzb06bjtpwvmTiDjbBjvuTHw4b57peDK1unu3p/Az/H0zX+htu7wx0bwxmS2rwiYrSvhtxJxojdHpWJGnz7d5/iapi29z+8jcfTPrxqvxfd9rCiNuU0LmlbL3+J9xpVDjL8hpiwxloAvmmk1gdswkpOm0K42hM2718MxjaXgwyGPAAAP20lEQVR4nO2di3/TRrbH5fgRZDFkxnqMZUuWjCwryMHIjk1oKQlwQw1pE1oKZSn76qW9tLcb2BJul7rZZNnl0nbbbPdP3hk7aV62LDtyZAV/P20+KRRj/XJec86RzDBjxowZM2bMmDFjxowZM2bMmOMHIAljAFUIAMcBiiiKLPkNCAGnKEDlAAOgiIJ+n8cIQkCt10VcKmmaIZUY5uLFs4SLF8tpzBqGoZVKiAMKB4N+o8cIgFJJYrjy3KW33r78jm1euXKlUCiQr1ca9vuX599amNM51tAwDvqNHh8sC/S5lavXUldMy+J5PpNJpTIZ+pWQ4S3LNK1r89f/q9z2p5MMYDFCEjDUs+fmH5pUjgghm81GWt9EIjb9xs7SX7OJMMuLN1bmGE3CQATMyQwt1DoYDZx99z27scxnI73h7Yb58f2bOoMRwwX99ocChJqmf3LLbJh8NlvkPWgSiWSKfMN8+IcHdeNkhhYJ31wyG3YqU4zwqYwnSYgvZTMR2ypcWwA0MZ8cF5IQA7DELbx3xfLiMR3IWub71zliK+pJ0YRjNI1b+bhgWZnUgJrwfKSxuKKypZNSsWCjvLC4bKemiwOaSYRKmbLMhytq6MMKIpU6BJpx7lrBtrO8zXsLrB00Ifk6UsxahVuXDEWl3hhaHxKVNMLG7XumPaDPHJSGt5Yv6yVR4XQQ9LUNDGIN5Tpv8h4zb0+yNm/xK4qhKqGtbxUxfpO4DUm+HlNvL2hqths3bhtYDPraBgEqDFKZFZ4W8Dzvj+9EWocA3iquGCIXQu9RDMn44HLBJy32C5M159W0Fr4wC1n9UoNfHjT7uovSsD68A0MWUgANryuNaTvrUyA5oMl0qpG5JDJhch+gQMTNN4Yhxw4Z2/rIQEx4ylogSuVrpjVMTfjscuHdeog6CCyYe2jxw/GbbTLTxUhhJSwdBMCx+OyiRX6S9hA1Sdmpxl0Vq0FfrTc4ibm9uFwcoh4Uu1i4GzfSIYknnDY3bWWyPlXz3cgUlog9hkUTbW7RSkWGLEnEuquKQAEhqNskRpcuvj/UhEOxM9ZSWYIgFPWJoqXrt8zUMIMrgS8WlhQDhyQPq5p6o2FPD9lxUuY9g02HI5awAMOrZsbODHLISaVSrfHXDt11TTXm0yKAMASxhJGwYqyY/XUF6Eg0lbUIhULBJFh8hmiTymYz3UTJLs+XDSUURsKwCqfdzth92UjRshoF++Olq++unDt3buH6W/fvXbYLdGza9XX4wr20gUOiCeKM8vt2P3UJb/5m8erC2Q9KABoGFKGhSbiElYuX7t9atrqNgpaXAEynQ3IkBgx712yPHdwhJyFS+Bet5Vsrc3FNAlBnEEIYYwQACROAkUT1wUc3rGWrNdfZQ8qebiwpIgNhSOaBSFswPRlJsZjiLTN1da4udW0LqZA5+9Yt09o/EqIFPReagp4gPSh6K9YytmW+s1J23bhRsAQMbuFagcTc3T85XZhnwlPQE8CS6W1kkW0sflIWWZF16QgBCESGFdVPFvfaXuMu0KAClGO8qiOA68RzvAjCFy3zapmuH3mKCFL5vrnd9c+mrCWOFPTDvhTfALi86MVIMrZ57YGBvbaXgWoYtx+2UxDf+G14CnoK1O57MpPG8nXApnXP1o8U1eDepv5DCnoxLAV9C4Av9p5a8FneunWT/Kghljy/MJSQZCzYVqYxrxgkU4cklpB3DuBdq2dhksoWbjwgeaP/1xdvZk1S0IfJSBiJ/d2V3n5jX5lXWXGg3Wjj7NvYkEJS0FNIUan/frl3Z838Q4kBaKCqXJdoc8D3dz48gCSuxv64yNspl2ZShm+scHVSww+kiaTS9Z6QFPQUjoXnhdinxUzWZaUia76rB/1GjxFOm4sJgvDlf2dc1hrNt0/Mep4n0KMYQcj9sXvT0frtm3XjCVMWqCa5mPBZpKP38EVzETNieKryo6N9nmuLIrz48n/4TqLY/FzIlkWOCnxMTIT4jpDLCbmvOrmPuaCFcv9sUAC72jYTYicC+e4z2nJP7S1qs9Y9FgAGvDGyILX0jISSXYRPbb7I27sbsVm+OCe9SfEVYlh6EdtLjiRlftra0YSftgsfsUpIdiJ8ASjaF7nYPkPJvYh9Vfw1K5Oc854inZjbKTyhlh7lYvshofZTO5NqV7U2b12SGO5N0gQR1zmoCQ0qX/5vJhWhp5+U/WH9TSpMGLrxeVvopAlNytPUd1KFm6U3KZgQYOnPuQ6akHqFFLU0zFofnvjbYQ+hne+oyU5StsxL6XqYGh8+gPQ/dfKdbf8hJ+V3uLT+JgVYAnsn10UTYj6C8JV1XxysixRiaGHfWRNBoGegz84yHlvtLCfGfSHwvT/tmbB92ukszGPvjnPmycwpH5h5qkDPo5LhcD7mokku9sxz0oHrkwlfWNO5YDfOucc5NzuJrXrVBMEzExOTPpCcieMAu5yAgWXBVROh7LlBAM5MJn3hdBwFOFQGSJpz1ST3nPE+BT0zlZzwBQYFmOgQKK12KU62NXkmenZt3zRJrgc5U8Yq7lzZ74YT7zfY+KZJ4mmQNx+rEnjmpkgsdkcPwE6+DrJbw2mMuyZC2fuys3+avIwP86J7wMH2tKu7Jqz3cOef76yJAeYdBeL/c9XkseS9VPBPkyfxIBe8ROm5qybPPS+u+anJKT3I2l5kemgisccfT4gmAcZYJIIR1CQ5E2ivE8HHrpqcl1jP9ZN/mlwIMu8wWHS3k/PdF+oP4aMmQYZY0EuT5+gN1EQba3IATuPc65M/ad5PqH7GkwDPO5wG3OvYWB93DPiXi2fiQZ53AHI/7+R07y/mY30S6MQe4Gfu/ZM7QZx3TgVpJ6yKP3fX5Avp+DVJrgW5Www4aXX/7slBTR55D7L+2cnLIO0EKeIdwa1rn3uueX4xHzUJdhjLlgVXUYRyAL2CjXiwMy/usRBz6dsLq54Nxcd+bMBbUZLrHDAWe3b8miTPBHxjqfSouyZCa8DjFaJJwstIayLZSzpGDFYTtvuAh2gl5L6pMcDTrgXitAunPTI56WYmp3WsD/uyXWFXu+0VCHQH4y+vKmmv6VjRIOsBBOEFN0tJzqgo2LtiWOVxF01yQu7Ft060Wff2AE8AiclzHlAV0dVzEi8BE/AGnXa+sybETP72XV6WnSryNpbDnIo8mIkElafdzWQyOZXYCHwZV/xzB00EWtx+48jRaDQ/C7zP0T2hrrlpMplY16Vgb1YH0mqH3S3iN8LfZSpJNOrUDF9/bpx22iWcJBNTgAv4BhAEcac96tyL717lW6LIzqy/DzRF64numhDXORXHMNg9JSCJh9oFuVzsmzzxmradEEPB0MeoF1/bdEnFyeRaoF37FgjePhhPhNxfiSLRbWSnyWDvI42eqBNTie6aJJJfB755yjIAvzhoJ9+S6LodTYgmeWeL0XzTJL6x6XYGSE55P4kPCwgk/dlO5sm1/v1bPkr02JGE/Ef+VR35E/YAy8RPk9zSXZOJmeBdhyB98eV26skJJAn/Nf+riezgzAJ/4gkHlA0XxyG5OBHo8skuaKeUpWXJ31tFyX5N8vmqP+lY0l0TMU3F66NxYwz6fOfGUZKCD+rRDilyzRdRVPxy000SOu8akbtTy9RCyD+5b3aKkgOaRJ3m0bfgyYlIXU+4xRLCWjn4GEuR8CNiIaR2/UsnI9kJKfoRt5uRxCrihUn35klynQt4134boKzmqN98e8hA9opSOeKTfziggjVSwrr2Ti7U+9iMGiYci56T0vW7fHdFSJx1Kkf8a6T4RmLS3XcSG8qIfNwKOV98IbRPwW6i5Ctg4FsDMYdQ/GmPYDI5MXXG1ws7AqrElv7xyl0R6lXEfQbVBGgskcS1NJlITiaejEZxwtCHFOrq///QPb7uus9rfcC/Aqf1jUTypx6iTKyPzFP+JB1zcLaX75ATUN6ZVVm2b4cHHNCZjYleDfvJxEyQiycdqPXUhOI0a2ko9jfjBpqIwMtehQnRZPNpkDczHYYrVRwPmtBIi3Efm3+UUlw8leg51aH7SYEuCx8CIejFTqgozRrT188TSL98vznpOtNpkXiqjNbjMxBMV5283DPOktLfkSswzWgIKZy7vdALVBFbm3V++DExkXBXZSo5o+P+Y9WQAbOOSx2711Sc5hZMKxIL3PumEAKE9UrroP1PknNcK9ipzfURvLcb6VHXSnbXVvLbqvRYPMdpVKuQ/7ndo/o+sTnloknyiX48l9kXgNnylHtaDkRUqdRcHyNLIlR1tqXI9p/4OTnhEmcnvd95eIwAgGiR0jOk7HgQibZbECppxEDAslQe4iwKfXS9Jilptfpadva+luz8OJXs2HacIhXs5kZ89DyHapKuN70q0pbFIdZSrakorSD6vH+EJa2UhvqdaqXpOAdye152Xv2r42gnOTE1OaMEPNTpBsbV3plnz09ebsmSl5uzla2tX375pbq1tfV6tikTPfLRQ11dGof+3alnPzmxmVj3fnP3cUJ8QMFbHnNPSxK5/YWE3F1aAUQ+LAh5WRLBnZ9/Shzyn8QU8Rwx4AWL7iCVJuS+HKgfiP/886fDFe3mk1GMJTtwLNd0vGXkgSDHyPy/DvYMJqfOjEyPoAMAMfWmp4PPoKLI8g8/78/JyYn1IB9Q0BMEQakuO9Eh+U/bAPM/kqBCSv1kK5YkE1/HR/6JTbAmt0vPoZEnSXmKyEFrk6nNNT3oK+6Ngmo0RwxRlHz0h39vtkfpyc0n8dEsTPYhQa5lKUNF/rFdqSRm4Age/TqBiSjEUIbrPz8lE8nkjAbQqAeTNiBdezVkQ8nn5e+Tm6cQUNnRasJ2RSRHn2HWKdROHOfnUyUOhOVDigDHSdzsMOsUmuyd15yKkPe7/4MH6ZWOJzm/yDsV5PEDsEYGtaRVo8NLP45cDUEOPgjLpmtNZ0iiOM0aS4wkHJ9gvIvCiViv0BO+ry6Ubw8UdRaHTI9tVAyrTUeW/dSE9lvkrcAf/jkwCstituKv/5ASebZWCqmREESOA6hU87V7kI9uYUkdkdWbgUGlKi3gjto+oH887+Rf6yH6+LfugDTcko9c1rY6t7M1BbMnQhNRS7Nb8hE9KO/IRBFJ00JyEHYHcRw5vqrEg6gsA5hLflsRBkkkcJ8ITbZh9eosHVZE+y1vZZkOx+oovMmmOzgt1reaTr4/SfIOMZFqHKe1kDQF+gJCDiO99rqZ916yEAuZrdYRq6RZMSTdo35ofQ6kQh+dWduabVIvkuVDE7/WcHA779KxaaWqxzEGCjOSs08/YaFOdWkNRff1+FvftoalUXm2UtOVdCmEx9+BUBSFkVgAatVKe2a+hyidqVeJHAhhLIaljXZEAHEgFjAcYCWGXnc8ruu1beo6QJj+ImJFoAKAAArNpzj7D2LC1jUbM2bMmDFjxowZM2bMmDFjTh7/AelaVQZ2NAi4AAAAAElFTkSuQmCC",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    stipend: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "data:image/png;base64,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",

    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    stipend: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    stipend: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    stipend: "$48/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    stipend: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg ",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    stipend: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/Uber",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    stipend: "$46/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.svgcdn.com/logos/adobe.svg",
     companyName: "Adobe",
    datePosted: "1 week ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    stipend: "$52/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/tesla",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    stipend: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.svgcdn.com/logos/ibm.svg ",
    companyName: "IBM",
    datePosted: "2 weeks ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    stipend: "$35/hr",
    location: "Mumbai, India"
  }
];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){

        return <div key={idx}>
           <Card company ={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} stipend={elem.stipend} location={elem.location}/>
        </div>
      })}
      

     </div>
  )
}

export default App
