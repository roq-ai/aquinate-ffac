import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  status: yup.string().required(),
  assigned_to: yup.string().nullable(),
  created_by: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
