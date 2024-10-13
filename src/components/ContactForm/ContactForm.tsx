import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import Button from '../Button/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label>Имя:</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span>Это поле обязательно</span>}
      </div>

      <div className={styles.formGroup}>
        <label>Электронная почта:</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>Это поле обязательно</span>}
      </div>

      <div className={styles.formGroup}>
        <label>Номер телефона:</label>
        <input {...register('phone', { required: true })} />
        {errors.phone && <span>Это поле обязательно</span>}
      </div>

      <div className={styles.formGroup}>
        <label>Тема обращения:</label>
        <input {...register('subject', { required: true })} />
        {errors.subject && <span>Это поле обязательно</span>}
      </div>

      <div className={styles.formGroupTextArea}>
        <label>Текст обращения:</label>
        <textarea {...register('message', { required: true })} rows={4} />
        {errors.message && <span>Это поле обязательно</span>}
      </div>
      <Button text="Отправить" />
    </form>
  );
};

export default ContactForm;
