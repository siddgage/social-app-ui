import { axiosAuth, axiosUser } from "@/api/axios"
import { Loader } from "@/components/shared/Loader"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { BASE_USER_URL, CREATE, SIGN_UP } from "@/constants/UrlConstant"
import { SignupFormValidation } from "@/lib/validation"
import { UserDetails } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"


const Signup = () => {

  const isLoading = false

  const form = useForm<z.infer<typeof SignupFormValidation>>({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''

    },
    resolver: zodResolver(SignupFormValidation)
  })

  const onSubmit = (data: z.infer<typeof SignupFormValidation>) => {
    let userDetails = new UserDetails(data.username, data.name, data.email, data.password)

    axiosAuth.post(
      SIGN_UP,
      userDetails,
      { withCredentials: true })

      .then((resp: { data: any }) => {
        console.log(resp.data)

        axiosUser.post
          (
            CREATE,
            userDetails.username,
            {
              headers: { 'Authorization': `Bearer ${resp.data.token}` }

            }).then((res: any) => {
              console.log(res.data)

            }).catch((ex: any) => {
              console.log(ex.data)
            })

      }).catch((error) => {
        console.log("error:", error.response.data)
      })
  }

  return (
    <div>
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">

          <img src="/assets/images/logo-white.svg" alt="logo" />
          <h2 className="h3-bold md:h2-bold">Create account</h2>

          <form onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3 w-full mt-4">

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input placeholder="Confirm password" type="password" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="shad-button_primary mt-4">
              {isLoading ? (
                <div className="flex-center gap-2">
                  <Loader /> Submitting
                </div>)
                : "Signup"}
            </Button>

            <p className="text-small-regular text-light-2 text-center mt-2">
              Already have an acccount?
              <Link className="text-primary-500 text-small-semibold ml-1" to={'/login'}>
                Login
              </Link>
            </p>

          </form>
        </div>
      </Form>
    </div>
  )
}

export default Signup