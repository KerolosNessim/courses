"use client"
import { useState } from "react"
import { getCountries, getCountryCallingCode } from "react-phone-number-input/input"
import en from "react-phone-number-input/locale/en"
import flags from "react-phone-number-input/flags"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { TbBorderRadius } from "react-icons/tb"

const CountrySelect = ({ value, onChange }) => {
  const Flag = value ? flags[value] : null

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full h-14 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none flex items-center ">
        {value && Flag && <Flag style={{ width: "28px", height: "24px" ,TbBorderRadius:"10px" }} />}
        {value ? (
          <span>
            +{getCountryCallingCode(value)}
          </span>
        ) : (
          <SelectValue placeholder="Select country" />
        )}
      </SelectTrigger>
      <SelectContent className="max-h-[400px]">
        {getCountries().map((country) => {
          const CFlag = flags[country]
          return (
            <SelectItem key={country} value={country}>
              <div className="flex items-center gap-2">
                {CFlag && <CFlag className="w-5 h-4" />}
                <span>
                  {en[country]} (+{getCountryCallingCode(country)})
                </span>
              </div>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

const PhoneInputWithCountry = ({ field }) => {
  const [country, setCountry] = useState("SA")

  return (
    <div className=" flex items-center h-14 rounded-full border border-gray-300 px-2">
      <div className="">
        <CountrySelect value={country} onChange={setCountry} />
      </div>
      <Input
        {...field}
        type={"tel"}
        placeholder="5x xxx xxxx"
        className="p-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
      />
    </div>
  )
}

export default PhoneInputWithCountry
