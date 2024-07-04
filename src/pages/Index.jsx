import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream Job</h1>
          <p className="text-xl mb-10">Search for jobs, companies, and more</p>
          <div className="flex justify-center space-x-4">
            <Input
              type="text"
              placeholder="Job title"
              className="w-1/3"
            />
            <Input
              type="text"
              placeholder="Location"
              className="w-1/3"
            />
            <Button className="w-1/6">Search</Button>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((job) => (
            <Card key={job}>
              <CardHeader>
                <CardTitle>Software Engineer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Company Name</p>
                <p>Location</p>
                <p className="mt-4">Brief description of the job...</p>
                <Button
                  variant="link"
                  className="mt-4"
                  onClick={() => navigate("/jobs")}
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((company) => (
            <Card key={company}>
              <CardHeader>
                <CardTitle>Company Name</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-4">Brief description of the company...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;