import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted:', inputValue);
    setInputValue('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">My Application</h1>
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Input Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              placeholder="Enter something..."
              value={inputValue}
              onChange={handleInputChange}
              className="mb-4"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit}>Submit</Button>
          </CardFooter>
        </Card>
      </main>
      
      <footer className="mt-auto">
        <Separator />
        <div className="container mx-auto p-4 text-center text-sm text-gray-500">
          <p>&copy; 2023 My Application. All rights reserved.</p>
          <p>Built with React and Shadcn UI</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;