<?php

/**
* PROFILES API
*/
class Profilles
{
	
	private $profiles;

	function __construct()
	{
		$this->profiles = [];

		for ($i=1; $i < 91; $i++) { 
			$dia = '';
			if($i < 10){
				$dia = "0{$i}";
			}else{
				$dia = $i;
			}

			$month = rand(0,12);
			if($month < 10) $month = "0{$month}";
			$this->profiles['profile_'.$i] =
				[
					'id'   			    => $i,
					'name'   			=> $i.'º Profile',
					'last_name'   		=> $i.'º Profile last name',
					'email'  			=> 'profile'.$i.'@profiles.com',
					'date_of_birth'	    => date('Y').'-'.$month.'-'.$dia,
					'img'				=> '/profiles-app/app/assets/imgs/person-'.rand(0,6).'.png'
				];
		}		
	}
	/**
	 * return profiles
	 *@return array
	 */
	public function getProfiles()
	{
		return json_encode($this->profiles);
	}
}
