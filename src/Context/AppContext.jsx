"use client";

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const api = "https://7ai-backend.vercel.app/api";

  const [loading, setLoading] = useState(true); // unified loader
  const [navbar, setNavbar] = useState([]);
  const [course, setCourse] = useState([]);
  const [instructor, setInstructor] = useState([]);
  const [skill, setSkill] = useState([]);
  const [promote, setPromote] = useState([]);
  const [seniors, setSeniors] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [what, setWhat] = useState([]);
  const [curiculim, setCuriculim] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState([]);
  const [footer, setFooter] = useState([]);
  const [hero, setHero] = useState(null);
  const [productivity, setProductivity] = useState([]);

  const getData = async () => {
    try {
      const [
        res1,
        res2,
        res3,
        res4,
        res5,
        res6,
        res7,
        res8,
        res9,
        res10,
        res11,
        res12,
        res13,
        res14,
        res15,
        res16,
      ] = await Promise.all([
        fetch(`${api}/navbar`),
        fetch(`${api}/course`),
        fetch(`${api}/instructor`),
        fetch(`${api}/skill`),
        fetch(`${api}/promote`),
        fetch(`${api}/senior`),
        fetch(`${api}/testimonial`),
        fetch(`${api}/what`),
        fetch(`${api}/curricullum`),
        fetch(`${api}/certificate`),
        fetch(`${api}/pricing`),
        fetch(`${api}/faqs`),
        fetch(`${api}/question`),
        fetch(`${api}/footer`),
        fetch(`${api}/hero`),
        fetch(`${api}/productivity`),
      ]);

      // parse all JSONs at once
      const [
        data1,
        data2,
        data3,
        data4,
        data5,
        data6,
        data7,
        data8,
        data9,
        data10,
        data11,
        data12,
        data13,
        data14,
        data15,
        data16,
      ] = await Promise.all([
        res1.json(),
        res2.json(),
        res3.json(),
        res4.json(),
        res5.json(),
        res6.json(),
        res7.json(),
        res8.json(),
        res9.json(),
        res10.json(),
        res11.json(),
        res12.json(),
        res13.json(),
        res14.json(),
        res15.json(),
        res16.json(),
      ]);

      // set states
      setNavbar(data1[0]);
      setCourse(data2[0]);
      setInstructor(data3[0]);
      setSkill(data4[0]);
      setPromote(data5[0]);
      setSeniors(data6[0]);
      setTestimonial(data7[0]);
      setWhat(data8[0]);
      setCuriculim(data9[0]);
      setCertificate(data10[0]);
      setPricing(data11[0]);
      setFaqs(data12[0]);
      setQuestion(data13[0]);
      setFooter(data14[0]);
      setHero(data15[0]);
      setProductivity(data16[0]);
    } catch (error) {
      console.error("Data fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        navbar,
        course,
        instructor,
        skill,
        promote,
        seniors,
        testimonial,
        what,
        curiculim,
        certificate,
        pricing,
        faqs,
        question,
        footer,
        hero,
        productivity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
