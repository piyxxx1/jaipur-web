"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function AccountPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <>
      <HeaderNavigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  My Account
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Login to access your account
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                      Username or email address <span className="text-red-500">*Required</span>
                    </Label>
                                         <Input
                       id="username"
                       name="username"
                       type="text"
                       value={formData.username}
                       onChange={handleInputChange}
                       placeholder="Enter your username or email"
                       className="w-full px-3 py-2 border-0 border-b-2 border-gray-300 rounded-none focus:outline-none focus:border-white focus:border-b-2 bg-transparent"
                       required
                     />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password <span className="text-red-500">*Required</span>
                    </Label>
                                         <Input
                       id="password"
                       name="password"
                       type="password"
                       value={formData.password}
                       onChange={handleInputChange}
                       placeholder="Enter your password"
                       className="w-full px-3 py-2 border-0 border-b-2 border-gray-300 rounded-none focus:outline-none focus:border-white focus:border-b-2 bg-transparent"
                       required
                     />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                      }
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="rememberMe" className="text-sm text-gray-700 cursor-pointer">
                      Remember me
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-blue to-secondary-blue text-white font-semibold py-3 px-6 rounded-md hover:from-primary-blue/90 hover:to-secondary-blue/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Log in
                  </Button>

                  <div className="text-center">
                    <Link 
                      href="/forgot-password" 
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors underline"
                    >
                      Lost your password?
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
