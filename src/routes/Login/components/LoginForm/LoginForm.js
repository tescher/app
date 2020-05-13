import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { TextField, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { validateEmail } from 'utils/form';
import { USER_PROFILE_PATH } from 'constants/paths';
import styles from './LoginForm.styles';

const useStyles = makeStyles(styles);

function LoginForm({ onSubmit }) {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: 'onChange',
    nativeValidation: false,
  });

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="email"
        name="email"
        label="Email"
        margin="normal"
        autoComplete="email"
        fullWidth
        inputRef={register({
          required: true,
          validate: validateEmail,
        })}
        error={!!errors.email}
        helperText={errors.email && 'Email must be valid'}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        margin="normal"
        autoComplete="current-password"
        fullWidth
        inputRef={register({
          required: true,
        })}
        error={!!errors.password}
        helperText={errors.password && 'Password is required'}
      />
      <Link to={' '}>Forgot Password</Link>{' '}
      {
        // TODO: Need Forgot Password flow
      }
      <div className={classes.submit}>
        <Button
          color="primary"
          type="submit"
          variant="contained"
          disabled={isSubmitting || !isValid}>
          {isSubmitting ? 'Loading' : 'Login'}
        </Button>
      </div>
      <Link to={USER_PROFILE_PATH}>I&apos;m new, sign me up!</Link>{' '}
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
