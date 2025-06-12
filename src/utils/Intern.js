// import react from "../images/certificates/react-certificate.png";
import frontEnd from "../images/certificates/Internship.jpg";
// import javascript from "../images/certificates/Namaste-javascript.webp";
// import reactBasics from "../images/certificates/react-basics.png";

function IntershipsObj(id, title, url, description, image) {
  return {
    id,
    title,
    url,
    description,
    image,
  };
}

const INTERNSHIP = [
  IntershipsObj(
    1,
    "Frontend Developer Intern",
    "https://drive.google.com/file/d/11chyDu0zA4XOVqzhZqfL59CWNgwuAs9c/view?usp=drivesdk",
    "I completed my Front-End Developer internship at Necurity Solution, where I worked on real-time projects using ReactJS and modern web technologies. Collaborating with the team enhanced my understanding of UI/UX design and responsive development. This experience sharpened my skills in HTML, CSS, JavaScript, ReactJs within practical scenarios. It played a key role in building my confidence and shaping me as a developer ready for full-stack roles.",
    frontEnd
  ),
];
export default  INTERNSHIP;
// {
//     id:1,
//     title:"NAMASTE REACT",
//     url:"https://courses.namastedev.com/learn/certificate/8482819-142240",
//     description:'Namaste Dev is an online platform to learn FrontEnd Development related course. So I join for learn React JS Developer Course(Namaste React). Now I finished ReactJS Course with valid cerification authorized by AkshaySaini(founder of Namaste Dev).',
//     image:certificate

// }
// {
//     id:2,
//     title:"Frontend Developer (React)",
//     url:"https://www.hackerrank.com/certificates/9f42c0c57901",
//     description:'HackerRank is the market-leading coding test and interview solution for hiring developers. Start hiring at the pace of innovation!.I Passed the HackerRank Role Certification Exam for Front-End Developer Role',
//     certificate
// }
