import * as yup from "yup";

export default yup.object().shape({
  favorites: yup.array().of(
    yup.object().shape({
      title: yup
        .string()
        .min(3, "3 charactères min")
        .max(50, "50 charactères max")
        .required("Requis"),
      url: yup.string().url("URL non valide").required("Requis"),
      recurrence: yup.number().required(),
    })
  ),
});
