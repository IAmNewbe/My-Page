import { useRef, useState } from "react";

const Form = () => {
  let [index, setIndex] = useState(0);
  let [imageSend, setImageSend] = useState(null);
  let [image, setImage] = useState(null);
  let indexing;
  const Faculty = [
    {
      name: "Choose your Faculty",
      Department: [
        {
          name: "Enter your Faculty first"
        },
      ]
    },
    {
      name: "FACULTY OF SCIENCE AND DATA ANALYTICS (F-SCIENTICS)",
      Department: [
        {
          name: "Physics"
        },
        {
          name: "Chemistry"
        },
        {
          name: "Biology"
        },
        {
          name: "Biology"
        },
        {
          name: "Mathematics"
        },
        {
          name: "Statistics"
        },
        {
          name: "Actuarial Science"
        }
      ]
    },
    {
      name: "FACULTY OF INDUSTRIAL TECHNOLOGY AND SYSTEMS ENGINEERING (F-INDSYS)",
      Department: [
        {
          name: "Mechanical Engineering"
        },
        {
          name: "Chemical Engineering"
        },
        {
          name: "Engineering Physics"
        },
        {
          name: "Industrial and Systems Engineering"
        },
        {
          name: "Materials and Metallurgical Engineering"
        },
        {
          name: "Food Engineering"
        }
      ]
    },
    {
      name: "FACULTY OF CIVIL, PLANNING, AND GEO ENGINEERING (F-CIVPLAN)",
      Department: [
        {
          name: "Civil Engineering"
        },
        {
          name: "Architecture"
        },
        {
          name: "Environmental Engineerin"
        },
        {
          name: "Urban and Regional Planning"
        },
        {
          name: "Geomatics Engineering"
        },
        {
          name: "Geophysics Engineering"
        }
      ]
    },
    {
      name: "FACULTY OF VOCATIONAL (F-VOCATION)",
      Department: [
        {
          name: "Civil Infrastructure Engineering"
        },
        {
          name: "Industrial Mechanical Engineering"
        },
        {
          name: "Automation Electronic Engineering"
        },
        {
          name: "Industrial Chemical Engineering"
        },
        {
          name: "Instrumentation Engineering"
        },
        {
          name: "Business Statistics"
        }
      ]
    },
    {
      name: "FACULTY OF MEDICINE AND HEALTH",
      Department: [
        {
          name: "Medical Technology Programme"
        },
        {
          name: "Academic Stage of Medical Programme"
        },
        {
          name: "Professional Stage of Medical Programme"
        },
      ]
    },
    {
      name: "FACULTY OF MARINE TECHNOLOGY (F-MARTECH)",
      Department: [
        {
          name: "Naval Architecture and Shipbuilding Engineering"
        },
        {
          name: "Marine Engineering"
        },
        {
          name: "Ocean Engineering"
        },
        {
          name: "Sea Transportation Engineering"
        },
        {
          name: "Offshore Engineering"
        },
      ]
    },
    {
      name: "FACULTY OF INTELLIGENT ELECTRICAL AND INFORMATICS TECHNOLOGY (F-ELECTICS)",
      Department: [
        {
          name: "Informatics"
        },
        {
          name: "Information Systems"
        },
        {
          name: "Information Technology"
        },
        {
          name: "Electrical Engineering"
        },
        {
          name: "Computer Engineering"
        },
        {
          name: "Biomedical Engineering"
        }
      ]
    },
    {
      name: "FACULTY OF CREATIVE DESIGN AND DIGITAL BUSINESS (F-CREABIZ)",
      Department: [
        {
          name: "Product Design"
        },
        {
          name: "Business Management"
        },
        {
          name: "Interior Design"
        },
        {
          name: "Visual Communication Design"
        },
        {
          name: "Development Studies"
        },
      ]
    },
    {
      name: "INTERDISCIPLINARY SCHOOL OF MANAGEMENT AND TECHNOLOGY",
      Department: [
        {
          name: "Technology Management"
        },
      ]
    }
  ]

  const Robotics = [
    {
      name: "choose your robotics team"
    },
    {
      name: "ABINARA 1",
    },
    {
      name: "BANYUBRAMANTA"
    },
    {
      name: 'BARUNASTRA'
    },
    {
      name: "BAYUCARAKA"
    },
    {
      name: "ICHIRO"
    },
    {
      name: "IRIS"
    },
    {
      name: "ITS ROBOCON"
    },
    {
      name: "RIVAL"
    },
    {
      name: "VI-ROSE"
    }
  ]
  const [selectedValue, setSelectedValue] = useState({
    name: "Choose your Faculty",
    Department: [
      {
        name: "Enter your Faculty first"
      },
    ]
  }); // Initialize with an empty string or your default value

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
    let value = event.target.value
    indexing = Faculty.findIndex((e) => {
      return e.name === value
    })
    console.log(indexing);
    setIndex(indexing);
  };

  const formRef = useRef(null);
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzupN1wWy33bJyyOjuteB7Zelb4GfdVc91QRpqc638ZjGy0Sxuk0yu8s1Hvd-IZb0AMVw/exec";
  const [loading, setLoading] = useState(false);

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = function handleapaaja(e) {
        setImage(e.target.result);
        // console.log("image : ", image);
        // console.log("file : ",file);
        let res = reader.result;
        // console.log("res : ", res);
        // This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
        let spt = res.split("base64,")[1];
        // console.log("spt : ", spt);
        // This line creates an object called "obj" with three properties: "base64", "type", and "name"
        let obj = {
          base64:spt,
          type:File.type,
          name:File.name
        }
        setImageSend(JSON.stringify(obj))
        // console.log("object img : ", imageSend);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(formRef.current);
    // console.log("imageSend : ", imageSend)
    formData.set("Payment", imageSend)
    // const payment = formData.get("Payment");
    // console.log("payment update: ", payment);
    if ( (formData.get("Method") === "Choose your payment method") || (formData.get("Method") === null) ) {
      alert("Please select your payment method");
      setLoading(false);
    } else {
      try {
        const response = await fetch(scriptUrl, {
          method: 'POST',
          body: formData,
        });
    
        if (response.ok) {
          console.log("Success");
          alert("Thank you for your Participation");
          window.location.reload();
        } else {
          console.error("Request failed:", response.statusText);
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }
    console.log(formData.entries());
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
  };

  return (
    <>
      <div id="FormRSVP" className={"justify-center container md:w-9/12 mb-4 " + (loading ? "cursor-wait" : "cursor-default")}>
        <h1 className="justify-center pt-4 md:pt-20 pb-4 text-center md:text-3xl lg:text-5xl font-secondary text-white mx-3">Welcome Party Open House and basics Training Of Robotics</h1>
        <p className="text-white my-2 md:my-6 text-sm md:text-lg container text-justify">Welcome party and basic training of robotics fundamentals for members of the 2022 and 2023.
          The training is required as a prerequisite for registering the desired robotics team.</p>
        <div className="text-white my-2 md:my-6 text-sm md:text-lg container text-justify md:flex">
          <div className="w-full md:w-1/2 my-2 md:my-0">
            <span className="font-bold italic">Welcome Party</span>
            <ul>
              <li>Time : 18.15 GMT +7</li>
              <li>Date : 6 October 2023</li>
              <li>Place : ITS Robotics Center</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 my-2 md:my-0">
            <span className="font-bold italic">Open House Robotics Team</span>
            <ul>
              <ul>Time :
              </ul>
              <li>- 1st Sessions (08.00 - 10.00)</li>
              <li>- 2nd Sessions (10.30 - 12.30)</li>
              <li>Date : 7 October 2023</li>
              <li>Place : ITS Robotics Center</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 my-2 md:my-0">
            <span className="font-bold italic">Training and Workshop</span>
            <ul>
              <li>Time : To be announced</li>
              <li>Date : To be announced</li>
              <li>Place : ITS Robotics Center</li>
            </ul>
          </div>
        </div>
        <p className="text-white my-2 md:my-6 text-sm md:text-lg container text-justify">
        For participants, please attach proof of payment of IDR 50k sent to: 
        <br></br> BCA 0882862656 an Nadhifah Dini Shabrina <br></br>
        OVO/Gopay 0811881725 an Joana
        </p>
        <hr className="bg-white"></hr>
        <h1 className="justify-center pt-3 md:pt-10 md:pb-4 text-center md:text-3xl lg:text-3xl font-secondary text-white mx-3">Registration Has been closed<br></br>
          Thank you for your Participation
        </h1>
        <form name="google-sheet" className="hidden" ref={formRef} onSubmit={handleSubmit}>
          <div className="w-full md:mx-auto mt-3 md:mt-8">
            <div className="w-full px-4 mb-4 md:mb-8">
              <label htmlFor="Name" className="text-base md:text-lg text-white font-bold">Name</label>
              <input id="Name" name="Name" required type="text" placeholder="enter your name..." 
              className="w-full p-3 bg-transparent mt-2 md:mt-4 text-base md:text-lg text-white rounded-md border-white border-2 focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-white"/>
            </div>

            <div className="w-full px-4 mb-4 md:mb-8">
              <label htmlFor="NRP" className="text-base md:text-lg text-white font-bold">NRP</label>
              <input id="NRP" name="NRP" required type="text" placeholder="enter your NRP..." 
              className="w-full p-3 bg-transparent mt-2 md:mt-4 text-base md:text-lg text-white rounded-md border-white border-2 focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-white"/>
            </div>

            <div className="w-full px-4 mb-4 md:mb-8">
              <label htmlFor="Faculty" className="text-base md:text-lg text-white font-bold">Faculty</label>
              <select value={selectedValue} onChange={handleSelectChange} name="Faculty" className="w-full p-3 text-white bg-main-0 mt-2 md:mt-4 text-base md:text-lg rounded-md border-white border-2 focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-white">
              {Faculty.map((team) => {
                return <option value={team.name}>{team.name}</option>
              })}
              </select>
            </div>

            <div className="w-full px-4 mb-4 md:mb-8">
              <label htmlFor="Department" className="text-base md:text-lg text-white font-bold mr-2">Department</label>
              <select name="Department" className="w-full p-3 text-white bg-main-0 mt-2 md:mt-4 text-base md:text-lg rounded-md border-white border-2 focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-white">
                {Faculty[index].Department.map((depart) => {
                  return <option value={depart.name}>{depart.name}</option>
                })}
              </select>
            </div>
  
            <div className="w-full px-4 mb-4 md:mb-8">
              <label htmlFor="Phone" className="text-base md:text-lg text-white font-bold">Phone Number</label>
              <input id="Phone" name="Phone" required type="text" placeholder="enter your number..." 
              className="w-full p-3 bg-transparent mt-2 md:mt-4 text-base md:text-lg text-white rounded-md border-white border-2 focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-white"/>
            </div>

            <div className="w-full px-4 mb-4 md:mb-8">
              <label htmlFor="email" className="text-base md:text-lg font-bold after:content-['*']
              after:text-pink-600 after:ml-0.5 text-white">Email</label>
              <input id="email" name="email" required type="email" placeholder="enter your email..." 
              className="w-full p-3 bg-transparent mt-2 md:mt-4 text-base md:text-lg text-white rounded-md border-white border-2 focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-white"/>
            </div>

            <div className="w-full px-4 mb-4 md:mb-8">
              <label htmlFor="Payment" className="text-base text-white md:text-lg font-bold ">Payment</label>
              <input id="Payment" name="Payment" onChange={handleImage} required type="file" placeholder="enter message" 
              className="w-full p-3 h-32 bg-transparent mt-2 md:mt-4 text-white rounded-md border-white border-2  focus:outline-none focus:ring-white focus:ring-2 focus:border-tersier-0">
              </input>
              <h2 className="text-white my-2 text-base">Preview</h2>
              {image && <img src={image} className="border-white border-2 p-1 md:p-3 rounded-md mt-2 md:mt-4 hover:ring-white hover:ring-2 hover:border-tersier-0" alt="Uploaded" />}
              {/* <input id="Payment" name="Payment" required type="text" placeholder="enter your link drive..." 
              className="w-full p-3 bg-transparent mt-2 md:mt-4 text-base md:text-lg text-white rounded-md border-white border-2 focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-white"/> */}
              {/* <input id="Payment" name="Payment" required type="file" placeholder="enter message" 
              className="w-full p-3 h-32 bg-transparent mt-2 md:mt-4 text-white rounded-md border-white border-2  focus:outline-none focus:ring-white focus:ring-2 focus:border-tersier-0">
              </input> */}
            </div>
            <div className="w-full px-4 mb-4 md:mb-8">
              <label htmlFor="email" className="text-base md:text-lg font-bold
              after:text-pink-600 after:ml-0.5 text-white">Payment Method</label>
              <select name="Method" required className="w-full p-3 text-white bg-main-0 mt-2 md:mt-4 text-base md:text-lg rounded-md border-white border-2 focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-white">
                <option selected="selected">Choose your payment method</option>
                <option value="BCA 0882862656">BCA 0882862656 an Nadhifah Dini Shabrina</option>
                <option value="OVO/Gopay 0811881725">OVO/Gopay 0811881725 an Joana</option>
              </select>
            </div>
            <div className="w-full px-4 mb-4 md:mb-8">
              <label htmlFor="email" className="text-base md:text-lg font-bold
              after:text-pink-600 after:ml-0.5 text-white">You're Interest in Robotics Team</label>
              <select name="Interest" className="w-full p-3 text-white bg-main-0 mt-2 md:mt-4 text-base md:text-lg rounded-md border-white border-2 focus:outline-none focus:ring-tersier-0 focus:ring-2 focus:border-white">
                  {Robotics.map((team) => {
                    return <option value={team.name}>{team.name}</option>
                  })}
              </select>
            </div>
            <div className="w-full px-4">
              <button type="submit" className={"btn-send md:mb-3 text-base text-white font-semibold bg-tersier-0 py-3 px-8 rounded-full w-full hover:bg-opacity-50 hover:shadow-lg " + 
                (loading ? "animate-bounce cursor-wait" : "animate-none cursor-default")}>
                {loading ? "Sending ..." : "Send"}</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default Form;
