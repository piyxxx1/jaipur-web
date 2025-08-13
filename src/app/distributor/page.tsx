"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, CheckCircle, Circle } from "lucide-react";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

const DistributorApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Consent Information
    consentAccepted: false,
    termsAccepted: false,
    
    // Step 2: Applicant Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    panNumber: '',
    aadharNumber: '',
    
    // Step 3: Contact Details
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Step 4: Business Details
    businessName: '',
    businessType: '',
    gstNumber: '',
    businessAddress: '',
    businessCity: '',
    businessState: '',
    businessPincode: '',
    annualTurnover: '',
    
    // Step 5: Distributorship Area Preference
    preferredArea: '',
    areaDescription: '',
    marketExperience: '',
    competitorKnowledge: '',
    
    // Step 6: Documents
    documentsSubmitted: {
      panCard: false,
      aadharCard: false,
      gstCertificate: false,
      bankStatement: false,
      businessLicense: false,
      addressProof: false,
    },
    
    // Final Declaration
    declarationAccepted: false,
  });

  const steps = [
    { id: 1, title: "Consent Information", description: "Terms and conditions" },
    { id: 2, title: "Applicant Information", description: "Personal details" },
    { id: 3, title: "Contact Details", description: "Contact information" },
    { id: 4, title: "Business Details", description: "Business information" },
    { id: 5, title: "Area Preference", description: "Distributorship area" },
    { id: 6, title: "Documents & Declaration", description: "Final submission" },
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDocumentChange = (document: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      documentsSubmitted: {
        ...prev.documentsSubmitted,
        [document]: value
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Application submitted successfully!');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Consent Information</CardTitle>
              <CardDescription className="text-sm">Please read and accept the terms and conditions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="consent" 
                    checked={formData.consentAccepted}
                    onCheckedChange={(checked) => handleInputChange('consentAccepted', checked)}
                  />
                  <Label htmlFor="consent" className="text-sm">
                    I consent to the processing of my personal data for the purpose of distributor application
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions of becoming a MoniDay distributor
                  </Label>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Terms & Conditions</h4>
                <p className="text-sm text-gray-600">
                  By becoming a MoniDay distributor, you agree to maintain high standards of service, 
                  follow our business guidelines, and represent our brand professionally. You will be 
                  responsible for maintaining inventory, providing customer service, and following all 
                  applicable laws and regulations.
                </p>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Applicant Information</CardTitle>
              <CardDescription className="text-sm">Please provide your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input 
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender *</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="nationality">Nationality *</Label>
                  <Input 
                    id="nationality"
                    value={formData.nationality}
                    onChange={(e) => handleInputChange('nationality', e.target.value)}
                    placeholder="Enter your nationality"
                  />
                </div>
                <div>
                  <Label htmlFor="panNumber">PAN Number *</Label>
                  <Input 
                    id="panNumber"
                    value={formData.panNumber}
                    onChange={(e) => handleInputChange('panNumber', e.target.value)}
                    placeholder="Enter PAN number"
                  />
                </div>
                <div>
                  <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                  <Input 
                    id="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
                    placeholder="Enter Aadhar number"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Contact Details</CardTitle>
              <CardDescription className="text-sm">Please provide your contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea 
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter your complete address"
                  />
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input 
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter your city"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input 
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    placeholder="Enter your state"
                  />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input 
                    id="pincode"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    placeholder="Enter pincode"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Business Details</CardTitle>
              <CardDescription className="text-sm">Please provide your business information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input 
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    placeholder="Enter business name"
                  />
                </div>
                <div>
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="proprietorship">Proprietorship</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="private-limited">Private Limited</SelectItem>
                      <SelectItem value="public-limited">Public Limited</SelectItem>
                      <SelectItem value="llp">LLP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="gstNumber">GST Number *</Label>
                  <Input 
                    id="gstNumber"
                    value={formData.gstNumber}
                    onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                    placeholder="Enter GST number"
                  />
                </div>
                <div>
                  <Label htmlFor="annualTurnover">Annual Turnover *</Label>
                  <Select value={formData.annualTurnover} onValueChange={(value) => handleInputChange('annualTurnover', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select turnover range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-10lakhs">0 - 10 Lakhs</SelectItem>
                      <SelectItem value="10-50lakhs">10 - 50 Lakhs</SelectItem>
                      <SelectItem value="50lakhs-1crore">50 Lakhs - 1 Crore</SelectItem>
                      <SelectItem value="1-5crore">1 - 5 Crore</SelectItem>
                      <SelectItem value="5crore+">5 Crore+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="businessAddress">Business Address *</Label>
                  <Textarea 
                    id="businessAddress"
                    value={formData.businessAddress}
                    onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                    placeholder="Enter business address"
                  />
                </div>
                <div>
                  <Label htmlFor="businessCity">Business City *</Label>
                  <Input 
                    id="businessCity"
                    value={formData.businessCity}
                    onChange={(e) => handleInputChange('businessCity', e.target.value)}
                    placeholder="Enter business city"
                  />
                </div>
                <div>
                  <Label htmlFor="businessState">Business State *</Label>
                  <Input 
                    id="businessState"
                    value={formData.businessState}
                    onChange={(e) => handleInputChange('businessState', e.target.value)}
                    placeholder="Enter business state"
                  />
                </div>
                <div>
                  <Label htmlFor="businessPincode">Business Pincode *</Label>
                  <Input 
                    id="businessPincode"
                    value={formData.businessPincode}
                    onChange={(e) => handleInputChange('businessPincode', e.target.value)}
                    placeholder="Enter business pincode"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Distributorship Area Preference</CardTitle>
              <CardDescription className="text-sm">Please specify your preferred distribution area</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredArea">Preferred Area *</Label>
                  <Input 
                    id="preferredArea"
                    value={formData.preferredArea}
                    onChange={(e) => handleInputChange('preferredArea', e.target.value)}
                    placeholder="e.g., Jaipur City, Rajasthan"
                  />
                </div>
                <div>
                  <Label htmlFor="marketExperience">Market Experience (Years) *</Label>
                  <Select value={formData.marketExperience} onValueChange={(value) => handleInputChange('marketExperience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="areaDescription">Area Description *</Label>
                  <Textarea 
                    id="areaDescription"
                    value={formData.areaDescription}
                    onChange={(e) => handleInputChange('areaDescription', e.target.value)}
                    placeholder="Describe the area you want to cover, target market, etc."
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="competitorKnowledge">Knowledge of Competitors *</Label>
                  <Textarea 
                    id="competitorKnowledge"
                    value={formData.competitorKnowledge}
                    onChange={(e) => handleInputChange('competitorKnowledge', e.target.value)}
                    placeholder="Describe your knowledge of competitors in this area"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 6:
        return (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Documents & Final Declaration</CardTitle>
              <CardDescription className="text-sm">Please confirm documents and accept final declaration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Documents to be Submitted:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="panCard" 
                      checked={formData.documentsSubmitted.panCard}
                      onCheckedChange={(checked) => handleDocumentChange('panCard', checked as boolean)}
                    />
                    <Label htmlFor="panCard" className="text-sm">PAN Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="aadharCard" 
                      checked={formData.documentsSubmitted.aadharCard}
                      onCheckedChange={(checked) => handleDocumentChange('aadharCard', checked as boolean)}
                    />
                    <Label htmlFor="aadharCard" className="text-sm">Aadhar Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="gstCertificate" 
                      checked={formData.documentsSubmitted.gstCertificate}
                      onCheckedChange={(checked) => handleDocumentChange('gstCertificate', checked as boolean)}
                    />
                    <Label htmlFor="gstCertificate" className="text-sm">GST Certificate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="bankStatement" 
                      checked={formData.documentsSubmitted.bankStatement}
                      onCheckedChange={(checked) => handleDocumentChange('bankStatement', checked as boolean)}
                    />
                    <Label htmlFor="bankStatement" className="text-sm">Bank Statement (6 months)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="businessLicense" 
                      checked={formData.documentsSubmitted.businessLicense}
                      onCheckedChange={(checked) => handleDocumentChange('businessLicense', checked as boolean)}
                    />
                    <Label htmlFor="businessLicense" className="text-sm">Business License</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="addressProof" 
                      checked={formData.documentsSubmitted.addressProof}
                      onCheckedChange={(checked) => handleDocumentChange('addressProof', checked as boolean)}
                    />
                    <Label htmlFor="addressProof" className="text-sm">Address Proof</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Final Declaration:</h4>
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="declaration" 
                    checked={formData.declarationAccepted}
                    onCheckedChange={(checked) => handleInputChange('declarationAccepted', checked)}
                  />
                  <Label htmlFor="declaration" className="text-sm leading-relaxed">
                    I hereby declare that all the information provided in this application is true and correct to the best of my knowledge. 
                    I understand that any false or misleading information may result in the rejection of my application or termination of 
                    the distributorship agreement if already granted.
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderNavigation />
      <div className="py-4 sm:py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Become a Distributor</h1>
            <p className="text-sm sm:text-base text-gray-600">Join MoniDay as a distributor and grow your business with us</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-6 sm:mb-8">
            {/* Mobile Progress - Hidden on larger screens */}
            <div className="block sm:hidden mb-4">
              <div className="flex items-center justify-center space-x-2">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 1 
                    ? 'bg-primary-blue border-primary-blue text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > 1 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-xs font-semibold">1</span>
                  )}
                </div>
                <div className={`flex-1 h-1 ${
                  currentStep > 1 ? 'bg-primary-blue' : 'bg-gray-300'
                }`} />
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 2 
                    ? 'bg-primary-blue border-primary-blue text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > 2 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-xs font-semibold">2</span>
                  )}
                </div>
                <div className={`flex-1 h-1 ${
                  currentStep > 2 ? 'bg-primary-blue' : 'bg-gray-300'
                }`} />
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 3 
                    ? 'bg-primary-blue border-primary-blue text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > 3 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-xs font-semibold">3</span>
                  )}
                </div>
                <div className={`flex-1 h-1 ${
                  currentStep > 3 ? 'bg-primary-blue' : 'bg-gray-300'
                }`} />
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 4 
                    ? 'bg-primary-blue border-primary-blue text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > 4 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-xs font-semibold">4</span>
                  )}
                </div>
                <div className={`flex-1 h-1 ${
                  currentStep > 4 ? 'bg-primary-blue' : 'bg-gray-300'
                }`} />
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 5 
                    ? 'bg-primary-blue border-primary-blue text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > 5 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-xs font-semibold">5</span>
                  )}
                </div>
                <div className={`flex-1 h-1 ${
                  currentStep > 5 ? 'bg-primary-blue' : 'bg-gray-300'
                }`} />
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 6 
                    ? 'bg-primary-blue border-primary-blue text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > 6 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-xs font-semibold">6</span>
                  )}
                </div>
              </div>
              <div className="text-center mt-2">
                <span className="text-sm font-medium text-gray-700">
                  Step {currentStep} of 6: {steps[currentStep - 1]?.title}
                </span>
              </div>
            </div>

            {/* Desktop Progress - Hidden on mobile */}
            <div className="hidden sm:block">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.id 
                        ? 'bg-primary-blue border-primary-blue text-white' 
                        : 'bg-white border-gray-300 text-gray-500'
                    }`}>
                      {currentStep > step.id ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <span className="text-sm font-semibold">{step.id}</span>
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-1 mx-2 ${
                        currentStep > step.id ? 'bg-primary-blue' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Progress value={(currentStep / 6) * 100} className="h-2" />
          </div>

          {/* Step Content */}
          <div className="px-2 sm:px-0">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            {currentStep < 6 ? (
              <Button
                onClick={nextStep}
                className="flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="flex items-center justify-center space-x-2 w-full sm:w-auto"
                disabled={!formData.declarationAccepted}
              >
                Submit Application
                <CheckCircle className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DistributorApplication;
