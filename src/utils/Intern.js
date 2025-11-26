// import react from "../images/certificates/react-certificate.png";
import frontEnd from "../images/certificates/Internship.png";
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
    "https://drive.google.com/file/d/1adA7q-KqXvfq44hYNUsz9Pgv33pdck_B/view?usp=sharing",
    "I completed a 3 Month Front-End Developer Internship at Necurity Solution, where I worked on building responsive UI components using ReactJS, JavaScript, HTML, and CSS. I contributed to real-time web interfaces and followed UI/UX best practices to improve user experience. During the internship, I collaborated with the team to enhance component structure, maintain clean code, and optimize front-end performance. This hands-on experience strengthened my technical skills and improved my understanding of modern front-end development workflows.",
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
