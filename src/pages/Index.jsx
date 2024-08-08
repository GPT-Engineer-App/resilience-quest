import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const catBreeds = [
  { name: "Siamese", description: "Vocal and social" },
  { name: "Maine Coon", description: "Large and gentle" },
  { name: "Persian", description: "Long-haired and calm" },
  { name: "Bengal", description: "Energetic and spotted" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
        
        <div className="mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Characteristics of Cats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Cats are fascinating creatures known for their independence, agility, and affectionate nature. 
              They are excellent hunters with keen senses and flexible bodies. Domesticated cats have been 
              human companions for thousands of years, valued for both their practical skills and their 
              companionship.
            </p>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-semibold mb-4">Popular Cat Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {catBreeds.map((breed) => (
            <Card key={breed.name}>
              <CardHeader>
                <CardTitle>{breed.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{breed.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
