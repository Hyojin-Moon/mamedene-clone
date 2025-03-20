import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useAuthStore } from "../../store/authStore";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { user } = useAuthStore();
  const { loginWithKakao } = useAuth();
  const router = useRouter();

  // 로그인한 경우 자동으로 예약 페이지로 이동
  useEffect(() => {
    if (user) {
      const redirectTo = router.query.redirect || "/reservations"; // 기본 이동 경로
      router.replace(redirectTo as string);
    }
  }, [user, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-semibold">
        카카오헤어샵의 새 이름 <br />
        마메드네 신규 가입 시 <br />
        최대 50% 할인
      </h1>
      <img src="/image/signup.png" alt="회원가입" className="w-2/5 mt-16" />
      {!user ? (
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={() => loginWithKakao()}
            className="mt-24 flex items-center justify-center w-[500px] py-3 bg-[#FFD960] text-black font-bold rounded-full shadow-md hover:bg-[#E5C700] transition"
          >
            카카오로 로그인
          </button>
          <p className="text-sm text-gray-500 mt-2">
            마메드네는 카카오 계정으로 로그인 가능합니다.
          </p>
        </div>
      ) : null} {/* 로그인된 경우 로딩 문구 제거 */}
    </div>
  );
};

export default LoginPage;
