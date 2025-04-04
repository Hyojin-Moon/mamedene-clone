import { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import { useRouter } from "next/router";

const MyPage = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/auth/login?redirect=/user");
    }
  }, [user, router]);

  if (!user) return null; // 로그인되지 않은 경우 화면을 렌더링하지 않음

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      마이페이지
    </div>
  );
};

export default MyPage;
