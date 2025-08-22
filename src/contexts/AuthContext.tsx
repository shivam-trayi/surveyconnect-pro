import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

export interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  country: string;
  joinedAt: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  company: string;
  country: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('vendor_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        localStorage.removeItem('vendor_user');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user data - in real app, this would come from API
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: email,
        company: 'Research Solutions Inc.',
        country: 'United States',
        joinedAt: new Date().toISOString(),
      };

      setUser(mockUser);
      localStorage.setItem('vendor_user', JSON.stringify(mockUser));
      
      toast.success('Welcome back!', {
        description: 'You have successfully logged in.',
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast.error('Login failed', {
        description: 'Invalid email or password. Please try again.',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (data: SignupData): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newUser: User = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        company: data.company,
        country: data.country,
        joinedAt: new Date().toISOString(),
      };

      setUser(newUser);
      localStorage.setItem('vendor_user', JSON.stringify(newUser));
      
      toast.success('Account created successfully!', {
        description: 'Welcome to VendorPortal. Your account is ready to use.',
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast.error('Signup failed', {
        description: 'An error occurred while creating your account. Please try again.',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vendor_user');
    toast.success('Logged out successfully', {
      description: 'You have been safely logged out.',
    });
    navigate('/');
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isLoading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};