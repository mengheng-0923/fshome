import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  Navigate, 
  Outlet 
} from 'react-router-dom';

// --------------------------------------------------
// 1. 模拟认证状态（实际应用中通常在全局状态管理中）
// --------------------------------------------------
const isAuthenticated = false; // 假设用户当前未登录

// --------------------------------------------------
// 2. 路由守卫组件 (ProtectedRoute)
// --------------------------------------------------
const ProtectedRoute = ({ isAllowed, redirectPath = '/login' }) => {
  if (!isAllowed) {
    // 如果没有权限，立即导航到登录页
    // replace 属性确保用户无法通过浏览器返回按钮回到受保护页面
    return <Navigate to={redirectPath} replace />;
  }

  // 如果有权限，渲染嵌套的子路由（即 <Outlet /> 代表的 AdminPage）
  return <Outlet />;
};

// --------------------------------------------------
// 3. 页面组件
// --------------------------------------------------

const HomePage = () => <h2>首页 (任何人都可以访问)</h2>;
const LoginPage = () => <h2>登录页 (请登录...)</h2>;
const AdminPage = () => <h2>管理员面板 (仅限登录用户访问)</h2>;

// --------------------------------------------------
// 4. 主应用配置路由
// --------------------------------------------------

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">首页</Link> | 
        <Link to="/login">登录</Link> | 
        <Link to="/admin">管理员页面</Link>
      </nav>
      
      <Routes>
        {/* 公共路由 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* 核心守卫逻辑：将 ProtectedRoute 作为父级 Route */}
        <Route element={<ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login" />}>
          
          {/* 当访问 /admin 时，会先经过 ProtectedRoute 的判断 */}
          <Route path="/admin" element={<AdminPage />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
