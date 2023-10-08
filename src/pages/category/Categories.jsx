import { Fragment } from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { useEffect } from 'react';
import ApiConfig from '../../api/ApiConfig';
import { useSelector } from 'react-redux';

export default function Categories() {
  const { accessToken } = useSelector((state) => state?.auth);
  useEffect(() => {
    ApiConfig.get('category/getAllCategories', {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  return (
    <Fragment>
      <Breadcrumb title='All categories' textActive='Categories' />
    </Fragment>
  );
}
