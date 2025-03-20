import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../api/supabaseClient";
import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { setUser, logout } = useAuthStore();

  // 카카오 로그인
  const loginWithKakao = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "kakao",
        options: { redirectTo: `${window.location.origin}/reservations/details` },
      });

      if (error) throw error;
      return data;
    },
    onSuccess: async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData?.session?.user) {
        setUser(sessionData.session.user);
        queryClient.invalidateQueries({ queryKey: ["user"] }); // ✅ 수정된 부분
      }
    },
  });

  // 로그아웃
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await supabase.auth.signOut();
    },
    onSuccess: () => {
      logout();
      queryClient.removeQueries({ queryKey: ["user"] }); // ✅ 수정된 부분
    },
  });

  return {
    loginWithKakao: loginWithKakao.mutate,
    logout: logoutMutation.mutate,
  };
};
