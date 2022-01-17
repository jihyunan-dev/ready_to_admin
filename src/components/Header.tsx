import { styled } from '@mui/material';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';

const Header = observer(() => {
    const router = useRouter();
    return (
        <Wrapper>
            <button type='button' onClick={() => router.push('/async-store')}>
                스토어에서 비동기통신
            </button>
            <button type='button' onClick={() => router.push('/react-query')}>
                리액트쿼리
            </button>
        </Wrapper>
    );
});

export default Header;

const Wrapper = styled('header')({
    width: '100%',
    height: 80,
});
